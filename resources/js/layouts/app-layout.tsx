import { usePage } from '@inertiajs/react';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';


export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
  const { authUser, userRoles } = usePage().props;

  return (
    <AppLayoutTemplate
      breadcrumbs={breadcrumbs}
      authUser={authUser}
      userRoles={userRoles}
      {...props}
    >
      {children}
    </AppLayoutTemplate>
  );
};
