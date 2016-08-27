/**
 * Created by evilQueen on 8/27/16.
 */
Meteor.startup(() => {
	Migrations.migrateTo('latest');
});