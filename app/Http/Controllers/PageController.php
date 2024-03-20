<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{

    /**
     * Display the user's profile form.
     */
    public function home(): Response
    {
        return Inertia::render('Home');
    }

    /**
     * Display the user's profile form.
     */
    public function aboutMe(): Response
    {
        return Inertia::render('AboutMe');
        return view('about-me');
    }

    /**
     * Display the user's profile form.
     */
    public function projectsMe(): Response
    {
        return Inertia::render('ProjectsMe');
    }

    /**
     * Display the user's profile form.
     */
    public function results(): Response
    {
        return Inertia::render('Results');
    }

    /**
     * Display the user's profile form.
     */
    public function skills(): Response
    {
        return Inertia::render('Skills');
    }

    /**
     * Display the user's profile form.
     */
    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function blog(): Response
    {
        return Inertia::render('Blog');
    }
}
