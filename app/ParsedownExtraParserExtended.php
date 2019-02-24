<?php

namespace App;

use TightenCo\Jigsaw\Parsers\ParsedownExtraParser;

class ParsedownExtraParserExtended extends ParsedownExtraParser
{
    protected function inlineLink($Excerpt)
    {
        $Link = parent::inlineLink($Excerpt);

        $Link['element']['attributes']['target'] = '_blank';

        return $Link;
    }
}
