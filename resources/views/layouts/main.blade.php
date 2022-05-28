<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{ secure_asset('css/app.css') }}">
    <title>Elation</title>
</head>
<body>

    <div id="app">

        <div class="mainPageWrap">

            @include('partials.global.nav')

            <div class="innerPageWrap">

                @yield('content')

                @include('partials.global.foot')
                
            </div>

            
            
        </div>

    </div>


    <script src="{{ secure_asset('js/app.js') }}" defer async></script>

</body>
</html>