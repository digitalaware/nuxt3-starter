<template>
	<FormContainer title="Sign In">
		<ElForm
			ref="loginFormRef"
			:rules="loginFormRules"
			:model="loginFormState"
			label-width="80px"
			label-position="top"
		>
			<ElFormItem
				label="Username"
				prop="username"
			>
				<ElInput
					v-model="loginFormState.username"
					placeholder="Enter username"
				/>
			</ElFormItem>
			<ElFormItem
				label="Password"
				prop="password"
			>
				<ElInput
					v-model="loginFormState.password"
					placeholder="Enter password"
					type="password"
				/>
			</ElFormItem>
			<ElFormItem class="button-container">
				<ElButton
					class="full-width"
					type="primary"
					@click="login(loginFormRef)"
				>
					Login
				</ElButton>
			</ElFormItem>
		</ElForm>
		<div class="flex-center flex-center--column">
			<ElText>Not have an account?</ElText>
			<NuxtLink to="/auth/signup">Sign Up</NuxtLink>
		</div>
	</FormContainer>
</template>

<script lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { ref } from 'vue';
import FormContainer from '~/components/common/FormContainer.vue';
import { LoginRequest } from '~/components/auth/auth.types';

export default defineComponent({
	name: 'LoginForm',
	components: { FormContainer },
	setup() {
		const loginFormRef = ref<FormInstance>();
		const { signIn } = useAuth();

		const loginFormRules = reactive<FormRules>({
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
		});

		const loginFormState = reactive<LoginRequest>({
			username: '',
			password: '',
		});

		const login = async (formEl: FormInstance | undefined) => {
			if (!formEl) {
				return;
			}
			await formEl.validate(async (valid, fields) => {
				if (valid) {
					await signIn(
						{
							username: loginFormState.username,
							password: loginFormState.password,
						},
						{ callbackUrl: '/' }
					);
				} else {
					console.log('error submit!', fields);
				}
			});
		};

		return {
			loginFormRef,
			loginFormRules,
			loginFormState,
			login,
		};
	},
});
</script>

<style lang="scss" scoped>
.button-container {
	margin-top: 2rem;
}
</style>
