/**
 * Created by maksy on 10/28/2016.
 */

angular.module('SombraTest', [])

    .controller('repeatController', function($scope) {
        $scope.list = [
            {name: 'ANNE HATHAWAY', major: 'CEO / Marketing Guru'},
            {name: 'ANNE HATHAWAY', major: 'CEO / Marketing Guru'},
            {name: 'ANNE HATHAWAY', major: 'CEO / Marketing Guru'},
            {name: 'ANNE HATHAWAY', major: 'CEO / Marketing Guru'},
            {name: 'ANNE HATHAWAY', major: 'CEO / Marketing Guru'}
        ];

        $scope.blogs = [
            {
                blogText: "'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat '",
                author: 'LESALE CHRISTOPER, PINTEREST'
            },
            {
                blogText: "'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat '",
                author: 'LESALE CHRISTOPER, PINTEREST'
            },
            {
                blogText: "'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat '",
                author: 'LESALE CHRISTOPER, PINTEREST'
            },
            {
                blogText: "'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat '",
                author: 'LESALE CHRISTOPER, PINTEREST'
            },
            {
                blogText: "'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat '",
                author: 'LESALE CHRISTOPER, PINTEREST'
            }
        ];
    });
