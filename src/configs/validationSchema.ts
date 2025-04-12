import * as Joi from "joi";

export const ValidationSchema = Joi.object({
    TEST_ENV_KEY: Joi.string().required()
});