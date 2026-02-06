<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
  use PasswordValidationRules, ProfileValidationRules;

  /**
   * Validate and create a newly registered user.
   *
   * @param  array<string, string>  $input
   */
  // public function create(array $input): User
  // {
  //   Validator::make($input, [
  //     ...$this->profileRules(),
  //     'password' => $this->passwordRules(),
  //   ])->validate();

  //   return User::create([
  //     'name' => $input['name'],
  //     'email' => $input['email'],
  //     'password' => bcrypt($input['password']),
  //     'avatar' => $input['avatar'] ?? null,
  //   ]);
  // }


  public function create(array $input): User
  {
    Validator::make($input, [
      ...$this->profileRules(),
      'password' => $this->passwordRules(),
    ])->validate();

    $avatarPath = null;
    if (isset($input['avatar'])) {
      $avatarPath = $input['avatar']->store('avatars', 'public'); // stocke le fichier
    }

    return User::create([
      'name' => $input['name'],
      'email' => $input['email'],
      'password' => bcrypt($input['password']),
      'avatar' => $avatarPath,
    ]);
  }
}
