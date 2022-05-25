<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{

    public function showHomePage()
    {
        return view('pages/home');
    }

    public function showStyleguide()
    {
        return view('pages/styleguide');
    }
}
