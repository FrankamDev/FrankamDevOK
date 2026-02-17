<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
  public function store(Request $request)
  {
    $request->validate([
      'email' => 'required|email|unique:subscribers,email',
    ], [
      'email.required' => 'L\'adresse email est obligatoire.',
      'email.email' => 'Format d\'email invalide.',
      'email.unique' => 'Vous êtes déjà inscrit à notre newsletter !',
    ]);

    Subscriber::create([
      'email' => $request->email,
    ]);

    return back()->with('message', 'Merci ! Vous êtes bien inscrit.');
  }
}
