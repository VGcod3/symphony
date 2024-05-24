import { z } from 'zod';

const tokensDataSchema = z.object({
  refreshToken: z.string(),
  accessToken: z.string(),
});

export const registerSchema = z.object({
  name: z.string({
    message: 'Name is required.',
  }),
  email: z
    .string({
      message: 'Email is required.',
    })
    .email({
      message: 'Invalid email address.',
    }),
  password: z
    .string({
      message: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long.',
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: 'Password must have a lowecase, uppercase, number and special character',
    }),
});

const userResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    name: registerSchema.shape.name,
    email: registerSchema.shape.email,
  }),
});

export const regsterResponseSchema = tokensDataSchema.and(userResponseSchema);

export const loginSchema = z.object({
  email: registerSchema.shape.email,
  password: registerSchema.shape.password,
});

const fullUserDataSchema = z.object({
  userData: registerSchema.optional(),
  tokensData: tokensDataSchema.optional(),
});

const getNewTokensSchema = z
  .object({
    refreshToken: z.string(),
  })
  .and(userResponseSchema);

export type UserRegisterReq = z.infer<typeof registerSchema>;
export type UserRegisterRes = z.infer<typeof regsterResponseSchema>;

export type UserLoginReq = Pick<UserRegisterReq, 'email' | 'password'>;
export type UserLoginRes = UserRegisterRes;

export type TokensRes = z.infer<typeof getNewTokensSchema>;

export type UserDataUpdate = Omit<UserRegisterReq, 'password'>;

export type FullUserData = z.infer<typeof fullUserDataSchema>;

export type TokensData = z.infer<typeof tokensDataSchema>;
