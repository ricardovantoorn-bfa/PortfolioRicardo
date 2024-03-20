<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RicardoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [PageController::class, 'home'])->name('home');
    Route::get('/about-me', [PageController::class, 'aboutMe'])->name('about-me');    
    route::get('/projects-me', [PageController::class, 'projectsMe'])->name('projects-me');
    route::get('/results', [PageController::class, 'results'])->name('results');
    route::get('/skills', [PageController::class, 'skills'])->name('skills');
    route::get('/Contact', [PageController::class, 'contact'])->name('contact');
    route::get('/Blog', [PageController::class, 'blog'])->name('blog');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
