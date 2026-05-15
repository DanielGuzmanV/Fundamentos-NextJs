import { NotFoundBase } from '@/components/shared/NotFoundBase';
import { PATHS } from '@/lib/constants/paths';

export default function NotFound() {
  return (
    <NotFoundBase
      title='Pagina no encontrada'
      message='Lo sentimos, la página que buscas no existe.'
      linkText='Volver al inicio'
      linkHref={PATHS.HOME}
    />
  );
}