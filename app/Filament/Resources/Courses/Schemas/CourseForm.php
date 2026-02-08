<?php

namespace App\Filament\Resources\Courses\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class CourseForm
{
  public static function configure(Schema $schema): Schema
  {
    return $schema
      ->components([
        TextInput::make('title_short')
          ->required(),
        TextInput::make('title')
          ->required(),
        FileUpload::make('image')
          ->image(),
        TextInput::make('slug')
          ->required(),

        Select::make('level')
          ->options(['beginner' => 'Beginner', 'intermediate' => 'Intermediate', 'advanced' => 'Advanced'])
          ->required(),
        TextInput::make('reading_duration')
          ->numeric(),
        TextInput::make('duration_hours')
          ->numeric(),
        TextInput::make('total_lessons')
          ->required()
          ->numeric()
          ->default(0),
        TextInput::make('total_quizzes')
          ->required()
          ->numeric()
          ->default(0),
        Textarea::make('description')
          ->columnSpanFull(),
        FileUpload::make('logo')
          ->image(),
        Toggle::make('is_popular')
          ->required(),
        Toggle::make('certified')
          ->required(),
        Textarea::make('objectives')
          ->columnSpanFull(),
        Textarea::make('prerequisites')
          ->columnSpanFull(),
        Textarea::make('requirements')
          ->columnSpanFull(),
        Textarea::make('skills_acquired')
          ->columnSpanFull(),
        Textarea::make('curriculum')
          ->columnSpanFull(),
        TextInput::make('price')
          ->numeric()
          ->default(0.0)
          ->prefix('FCFA'),
        TextInput::make('currency')
          ->required()
          ->default('FCFA'),
        Select::make('access_type')
          ->options(['free' => 'Free', 'paid' => 'Paid', 'one_time' => 'One time', 'subscription' => 'Subscription'])
          ->default('free')
          ->required(),
        Select::make('status')
          ->options(['draft' => 'Draft', 'published' => 'Published', 'archived' => 'Archived'])
          ->default('draft')
          ->required(),
        DateTimePicker::make('published_at'),
      ]);
  }
}
