<?php

namespace App\Filament\Resources\Lessons\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class LessonForm
{
  public static function configure(Schema $schema): Schema
  {
    return $schema
      ->components([
        Select::make('course_id')
          ->relationship('course', 'title')
          ->required()
          ->searchable()
          ->preload(),
        TextInput::make('reading_time')
          ->numeric(),
        TextInput::make('slug'),
        TextInput::make('module_number')
          ->numeric(),
        TextInput::make('lesson_number')
          ->required()
          ->numeric(),
        TextInput::make('views')
          ->required()
          ->numeric()
          ->default(0),
        TextInput::make('title')
          ->required(),
        RichEditor::make('content')
          ->label('Course Description')
          ->columnSpanFull()
          ->toolbarButtons([
            'bold',
            'italic',
            'underline',
            'strike',
            'link',
            'bulletList',
            'orderedList',
            'blockquote',
            'h2',
            'h3',

            'codeBlock',
            'redo',
            'undo',
            'attachFiles', // pour ajouter des images/fichiers
          ])
          ->fileAttachmentsDisk('public') // disque où stocker les images
          ->required(),
        TextInput::make('video_url')
          ->url(),
        TextInput::make('video_duration')
          ->numeric(),
        TextInput::make('reading_duration')
          ->numeric(),
        TextInput::make('position')
          ->required()
          ->numeric()
          ->default(0),
        TextInput::make('pdf_path'),
        Toggle::make('is_quiz')
          ->required(),
        Textarea::make('quiz_data')
          ->columnSpanFull(),
        Select::make('type')
          ->options(['video' => 'Video', 'text' => 'Text', 'quiz' => 'Quiz', 'file' => 'File', 'mixed' => 'Mixed'])
          ->default('text')
          ->required(),
        Select::make('status')
          ->options(['draft' => 'Draft', 'published' => 'Published'])
          ->default('draft')
          ->required(),
      ]);
  }
}
