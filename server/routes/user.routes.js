/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import useCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

router
  .route('/api/users')
  .get(useCtrl.list)
  .post(useCtrl.create);

router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, useCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, useCtrl.update)
  .delete(authCtrl.signin, authCtrl.hasAuthorization, useCtrl.remove);

router.param('userId', useCtrl.userByID);

export default router;
