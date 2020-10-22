import { appControllers } from '../../../domains/application/infra/http/controllers/index';
import { usersControllers } from '../../../domains/users/infra/http/controllers/index';

export const controllers = [...appControllers, ...usersControllers];
