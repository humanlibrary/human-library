const templateDirectiveTopBar =
`<nav id="hl-navbar" class="navbar navbar--hl navbar-default navbar-fixed-top" role="navigation">
  <div class="container">

    <a ui-sref="humanLibrary" class="navbar-brand">
      <img class="hl-navbar--logo" ng-src="{{$root.baseUrl}}src/_assets/pictures/logo.svg" alt="logo">{{ 'mainMenu.header'|translate }}
    </a>

    <div ng-transclude></div>

  </div>
</nav>`;

export default templateDirectiveTopBar;