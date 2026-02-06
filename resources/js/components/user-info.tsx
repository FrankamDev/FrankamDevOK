import { usePage } from '@inertiajs/react';

import type { User } from '@/types';

export function UserInfo({
  user,
  showEmail = false,
}: {
  user: User;
  showEmail?: boolean;
}) {

  const { auth } = usePage().props;
  return (
    <>

      <div className="w-8 h-8  bg-cyan-300 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium">

        <img
          src={auth.user.avatar ? `/storage/${auth.user.avatar}` : '/default-avatar.png'}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      {/* </Avatar> */}
      <div className="grid  flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.name}</span>
        {showEmail && (
          <span className="truncate text-xs text-muted-foreground">
            {user.email}
          </span>
        )}
      </div>
    </>
  );
}
