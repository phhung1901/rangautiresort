var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    $(document).ready(function () {

        $("#from").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#from').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#to').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#to').datepicker('option', 'minDate', date2);
            }
        });
        $('#to').datepicker({
            dateFormat: "yy-mm-dd",
            onClose: function () {
                var dt1 = $('#from').datepicker('getDate');
                var dt2 = $('#to').datepicker('getDate');
                //check to prevent a user from entering a date below date of dt1
                if (dt2 <= dt1) {
                    var minDate = $('#to').datepicker('option', 'minDate');
                    $('#to').datepicker('setDate', minDate);
                }
            }
        });
    });

}
/*
     FILE ARCHIVED ON 19:23:02 Mar 23, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:48:27 Apr 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.669
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.07
  cdx.remote: 0.06
  esindex: 0.01
  LoadShardBlock: 188.614 (3)
  PetaboxLoader3.datanode: 176.64 (4)
  PetaboxLoader3.resolve: 56.536 (2)
  load_resource: 69.767
*/