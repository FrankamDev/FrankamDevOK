<?php

namespace App\Services;

class TipTapTocGenerator
{
    public static function generate(array $content): array
    {
        $toc = [];

        foreach ($content['content'] ?? [] as $node) {
            if ($node['type'] === 'heading') {
                $text = collect($node['content'] ?? [])
                    ->pluck('text')
                    ->implode('');

                if (!$text) continue;

                $toc[] = [
                    'level' => $node['attrs']['level'],
                    'text'  => $text,
                    'id'    => str()->slug($text),
                ];
            }
        }

        return $toc;
    }
}
