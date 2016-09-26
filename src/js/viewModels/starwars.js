/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojselectcombobox'],
    function(oj, ko, $) {
        function StarWarsViewModel() {
        var self = this;
        self.selectedVal = ko.observableArray();
        
        self.characters = ko.observableArray([
            {"value": "1","label": "Luke Skywalter"},
            {"value": "4","label": "Darth Vader"},
            {"value": "10","label": "Obi-Wan Kenobi"},
            {"value": "11","label": "Anakin Skywalker"},
            {"value": "13","label": "Chewbacca"},
            {"value": "14","label": "Han Solo"}
        ]);
        
        self.characterSelected = function(event, data) {
            if(self.selectedVal() === undefined) {
                return;
            }
            var characterId = self.selectedVal()[0];
            if(characterId !== "") {
                $.get("https://swapi.co/api/people/" + characterId, function(json, status) {
                   console.log(json); 
                });
            }
        }
        //self.handleActivated = function(info) { };
        //self.handleAttached = function(info) { };
        //self.handleBindingsApplied = function(info) { };
        //self.handleDetached = function(info) { };
            }
        return new StarWarsViewModel();
    }
);