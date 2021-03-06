const templateHumanBook =
`<div class="book__wrapper">
  <a ui-sref="humanLibrary" class="book__background"></a>

  <div class="container book__container">

    <div class="page-header">
      <h1>
        <button class="btn btn-default pull-right" ng-click="vm.delete()"><i class="glyphicon glyphicon-trash"></i>
        </button>
        <small><a class="book__close" ui-sref="humanLibrary"><i class="glyphicon glyphicon-circle-arrow-left"></i></a>
        </small>
        {{book.name}}
        <small>
          {{book.title}}
        </small>
      </h1>
    </div>

    <div class="row">
      <div class="col-sm-12 text-muted">
        {{ 'book.numberOfRentals.prefix'|translate }} {{ book.rentals.length }} {{ 'book.numberOfRentals.suffix'|translate }}
      </div>
    </div>

    <div class="row" ng-controller="RentalsController as vm">
      <div class="col-sm-4 col-md-3 col-lg-2" ng-repeat="rental in book.rentals">
        <div class="panel panel-default hl-panel">
          <div class="panel-heading">
            <h2 class="panel-title heading-with-button-sm">
              <button class="btn btn-default btn-sm pull-right" ng-click="vm.cancel(rental)">
                <i class="glyphicon glyphicon-trash"></i>
              </button>
              <i class="glyphicon glyphicon-time"></i>
              {{rental.rentedAt|date:'H:mm'}}
              <span ng-show="rental.returnedAt">
                -
              {{rental.returnedAt|date:'H:mm'}}
              </span>
            </h2>
          </div>
          <div class="panel-body">
            <i class="glyphicon glyphicon-calendar"></i> {{rental.rentedAt|date:'d-M-yyyy'}}
          </div>
        </div>
      </div>
    </div>

  </div>

</div>`;

export default templateHumanBook;