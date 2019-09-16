<?php

use App\Actions\GenerateTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. You're free to add
| as many additional routes to this file as your tool may require.
|
*/

 Route::post('/generate', function (Request $request) {
     $qty_generated = 0;
     $qty_failed = 0;
     for ($i = 1; $i <= $request->qty; $i++){
         $ticket = GenerateTicket::dispatchNow([
             'event_id' => $request->eventId,
             'price' => $request->price,
         ]);
         if($ticket) { $qty_generated++;} else {$qty_failed++;}
     }

     return [
         'generated' => $qty_generated,
         'failed' => $qty_failed,
     ];
 });
