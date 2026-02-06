<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function index()
  {
    $user = auth()->user();
    $userRoles = $user->getRoleNames();

    return Inertia::render('dashboard', [
      'authUser' => $user,
      'userRoles' => $userRoles,
    ]);
  }
}
