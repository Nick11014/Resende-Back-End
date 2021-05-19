const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
      name: Joi.string().required(),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        name: Joi.string().optional(),
      })
      .min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
  }),
};
