const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      tipo: Joi.string().required(),
      NomeEmp: Joi.string().required(),
      aae: Joi.string().required(),
      tel: Joi.string().required(),
      end: Joi.string().required(),
      num: Joi.string().required(),
      comp: Joi.string().required(),
      desc: Joi.string().required(),
      cnpj: Joi.string().required(),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        NomeEmp: Joi.string().optional(),
        tipo: Joi.string().optional(),
        aae: Joi.string().optional(),
        tel: Joi.string().optional(),
        end: Joi.string().optional(),
        num: Joi.string().optional(),
        comp: Joi.string().optional(),
        desc: Joi.string().optional(),
        cnpj: Joi.string().optional(),
      })
      .min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
  }),
};
