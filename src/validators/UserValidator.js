const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      tipo: Joi.string().required(),
      NomeEmp: Joi.string().required(),
      aae: Joi.string().required(),
      tel: Joi.number().integer().min(10000000000).max(99999999999999).required(),
      end: Joi.string().required(),
      num: Joi.number().integer().min(0).max(9999).required(),
      comp: Joi.string().required(),
      desc: Joi.string().required(),
      cnpj: Joi.number().integer().min(10000000000).max(99999999999999).required(),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        NomeEmp: Joi.string().optional(),
        tipo: Joi.string().optional(),
        aae: Joi.string().optional(),
        tel: Joi.number().integer().min(10000000000).max(99999999999).optional(),
        end: Joi.string().optional(),
        num: Joi.number().integer().min(0).max(9999).optional(),
        comp: Joi.string().optional(),
        desc: Joi.string().optional(),
        cnpj: Joi.number().integer().min(10000000000).max(99999999999999).optional(),
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
