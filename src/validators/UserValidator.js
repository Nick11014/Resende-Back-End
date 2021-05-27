const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().min(3).max(30).required(),
      password: Joi.string().min(6).max(20).required(),
      tipo: Joi.string().min(3).max(30).required(),
      NomeEmp: Joi.string().min(3).max(30).required(),
      aae: Joi.string().min(3).max(30).required(),
      tel: Joi.number().integer().min(10000000000).max(99999999999).required(),
      end: Joi.string().min(3).max(50).required(),
      num: Joi.number().integer().min(0).max(9999).required(),
      comp: Joi.string().min(3).max(30).required(),
      desc: Joi.string().min(3).max(600).required(),
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
        NomeEmp: Joi.string().min(3).max(30).optional(),
        tipo: Joi.string().min(3).max(30).optional(),
        aae: Joi.string().min(3).max(30).optional(),
        tel: Joi.number().integer().min(10000000000).max(99999999999).optional(),
        end: Joi.string().min(3).max(50).optional(),
        num: Joi.number().integer().min(0).max(9999).optional(),
        comp: Joi.string().min(3).max(30).optional(),
        desc: Joi.string().min(3).max(600).optional(),
        cnpj: Joi.number().integer().min(10000000000).max(99999999999999).optional(),
      })
      .min(1),
      [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
  }),
};
