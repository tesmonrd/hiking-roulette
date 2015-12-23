var trailsController = {};
var test = {
  "name": "Eagle Lake Fisherman's Trail",
  "location": "Central Cascades",
  "rating": "4.0",
  "distance": "5.0",
  "elevation": "712",
  "description": "Historically, the most frequent approach to Eagle Lake has been via a scramble from Barclay Lake that is not suitable for most hikers. One story holds that Harvey Manning -- angry that logging in the lower Eagle Creek basin made road access to Eagle Lake via the Fisherman's route too easy -- intentionally omitted directions to this trailhead in his guidebook. The roadside parking area is marked with a “National Forest Wilderness” sign that bears a map of the region. The sign erroneously indicates “Barclay Lake #1055,” but knowledgeable hikers have indicated the location of the trailhead and the trail route with black marker. If you see this wrong sign, then you are in the right place!",
  "url": "http://www.wta.org/go-hiking/hikes/eagle-lake-fishermans-trail"
}
trailsController.index = function() {
  Trail.populateTable(trailsView.index);
  // Trail.loadAll(trailsView.index);
  console.log(Trail.all);
  trailsView.index();
};

trailsController.template = function(ctx, next) {
  if(trailsView.template) {
    next();
  } else {
    $.get('/listTemplate.html', function(data, msg, xhr) {
      trailsView.template = Handlebars.compile(data);
      next();
    }).done;
  }
};
