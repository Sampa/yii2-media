<?php
/**
 * @link https://github.com/2amigos/yii2-gallery-widget
 * @copyright Copyright (c) 2013-2016 2amigOS! Consulting Group LLC
 * @license http://opensource.org/licenses/BSD-3-Clause
 */

namespace sampa\media;

use yii\web\AssetBundle;

/**
 * DosamigosAsset
 *
 * @author Alexander Kochetov <creocoder@gmail.com>
 */
class SampaAsset extends AssetBundle
{
    public $js = [
        'sampa-blueimp-gallery.js',
    ];
    public $css = [
        'sampa-blueimp-gallery.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];

    public function init()
    {
        $this->sourcePath = __DIR__ . '/assets';
        parent::init();
    }
}
