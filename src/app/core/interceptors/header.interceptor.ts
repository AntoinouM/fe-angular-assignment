import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(addAuthToken(req));
};

const addAuthToken = (req: any) => {
  const token = import.meta.env.NG_APP_KEY;
  const url = req.url;

  if (url.includes('api.themoviedb.org')) {
    req = req.clone({
      setHeaders: {
          Authorization: `Bearer ${token}`
      },
    });
  }

  return req;
};
