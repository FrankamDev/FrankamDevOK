<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
  public function store(Request $request)
  {
    $data = $request->validate([
      'email'   => 'required|email',
      'message' => 'required|min:10',
    ]);

    Contact::create($data);

    return back()->with('success', 'Message reçu ! Je vous réponds très vite.');
  }
}
