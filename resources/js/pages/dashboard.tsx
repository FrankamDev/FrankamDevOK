import { Head, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard().url,
  },
];

export default function Dashboard() {
  const { authUser, userRoles } = usePage().props;
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tableau de bord" />



      {/* Sidebar */}
      {/* <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>Dashboard</SidebarMenuItem>

            {userRoles.includes('super-admin') && (
              <SidebarMenuItem>
                Administration
                <SidebarMenuSub>
                  <SidebarMenuSubItem>Gestion des utilisateurs</SidebarMenuSubItem>
                  <SidebarMenuSubItem>Gestion des rôles</SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            )}

            {userRoles.includes('user') && (
              <SidebarMenuItem>Mes tâches</SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar> */}

      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          </div>
        </div>
        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
        </div>
      </div>

    </AppLayout>
  );
}



// import { usePage } from '@inertiajs/react';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubItem
// } from '@/components/ui/sidebar';
// import AppLayout from '@/layouts/app-layout';

// export default function Dashboard() {
//   const { authUser, userRoles } = usePage().props;

//   return (
//     <AppLayout>
//       <Sidebar>
//         <SidebarContent>
//           <SidebarMenu>
//             <SidebarMenuItem>Dashboard</SidebarMenuItem>

//             {userRoles.includes('super-admin') && (
//               <SidebarMenuItem>
//                 Administration
//                 <SidebarMenuSub>
//                   <SidebarMenuSubItem>Gestion des utilisateurs</SidebarMenuSubItem>
//                   <SidebarMenuSubItem>Gestion des rôles</SidebarMenuSubItem>
//                 </SidebarMenuSub>
//               </SidebarMenuItem>
//             )}

//             <SidebarMenuItem>Mes tâches</SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarContent>
//       </Sidebar>

//       {/* Le reste du contenu du Dashboard */}
//     </AppLayout>
//   );
// }
