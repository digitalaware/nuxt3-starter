<template>
	<FormContainer title="Sign Up">
		<ElForm
			ref="registerFormRef"
			:rules="registerFormRules"
			:model="registerFormState"
			label-width="80px"
			label-position="top"
		>
			<ElFormItem
				label="Username"
				prop="username"
			>
				<ElInput
					v-model="registerFormState.username"
					placeholder="Enter username"
				/>
			</ElFormItem>
			<ElFormItem
				label="Password"
				prop="password"
			>
				<ElInput
					v-model="registerFormState.password"
					type="password"
					placeholder="Enter password"
				/>
			</ElFormItem>
			<ElFormItem
				label="Password confirm"
				prop="passwordConfirm"
			>
				<ElInput
					v-model="registerFormState.passwordConfirm"
					type="password"
					placeholder="Confirm password"
				/>
			</ElFormItem>
			<ElFormItem class="button-container">
				<ElButton
					class="full-width"
					type="primary"
					@click="register(registerFormRef)"
				>
					Sign Up
				</ElButton>
			</ElFormItem>
		</ElForm>
		<div class="flex-center flex-center--column">
			<ElText>Already have an account?</ElText>
			<NuxtLink to="/auth/login">Sign In</NuxtLink>
		</div>
	</FormContainer>
</template>

<script lang="ts">
import { ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import { InternalRuleItem, Value } from 'async-validator';
import FormContainer from '~/components/common/FormContainer.vue';
import { RegisterFormState } from '~/components/auth/auth.types';

export default defineComponent({
	name: 'SignupForm',
	components: { FormContainer },
	setup() {
		const registerFormRef = ref<FormInstance>();
		const { signUp } = useAuth();

		const validatePasswordMatch = (
			_: InternalRuleItem,
			value: Value,
			callback: (error?: string | Error) => void
		) => {
			if (value === '') {
				callback(new Error('Please enter the password confirm'));
			} else if (value !== registerFormState.password) {
				callback(new Error('Password must match'));
			} else {
				callback();
			}
		};

		const registerFormRules = reactive<FormRules>({
			username: [{ required: true, message: 'Enter Username', trigger: 'blur' }],
			password: [
				{
					required: true,
					message: 'Enter Password',
					trigger: 'change',
				},
				{
					min: 8,
					message: "Password length can't be shorten then 8",
					trigger: 'change',
				},
			],
			passwordConfirm: [
				{
					required: true,
					message: 'Confirm Password',
					trigger: 'change',
				},
				{
					min: 8,
					message: "Password length can't be shorten then 8",
					trigger: 'change',
				},
				{
					validator: validatePasswordMatch,
					trigger: 'change',
				},
			],
		});

		const registerFormState = reactive<RegisterFormState>({
			username: '',
			password: '',
			passwordConfirm: '',
		});

		const register = async (formEl: FormInstance | undefined) => {
			if (!formEl) {
				return;
			}
			await formEl.validate((valid, fields) => {
				if (valid) {
					signUp(
						{ username: registerFormState.username, password: registerFormState.password },
						{ callbackUrl: '/' }
					);
				} else {
					console.log('error submit!', fields);
				}
			});
		};

		return {
			registerFormRef,
			registerFormRules,
			registerFormState,
			register,
		};
	},
});
</script>

<style lang="scss" scoped></style>
