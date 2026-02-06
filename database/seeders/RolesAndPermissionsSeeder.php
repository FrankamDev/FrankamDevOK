<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
  public function run()
  {
    // Créer les rôles
    Role::create(['name' => 'super-admin']);
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);

    // Créer des permissions
    Permission::create(['name' => 'edit users']);
    Permission::create(['name' => 'delete users']);
    Permission::create(['name' => 'view dashboard']);

    // Donner toutes les permissions au super-admin
    $superAdmin = Role::findByName('super-admin');
    $superAdmin->givePermissionTo(Permission::all());
  }
}
