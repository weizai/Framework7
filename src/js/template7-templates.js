/*===========================
Compile Template7 Templates On App Init
===========================*/
app.initTemplate7Templates = function () {
    if (!window.Template7) return;
    Template7.templates = Template7.templates || app.params.templates || {};
    Template7.templatesData = Template7.templatesData || app.params.templatesData || {};
    Template7.templatesCache = {};

    app.templates = Template7.templates;
    app.templatesData = Template7.templatesData;
    app.templatesCache = Template7.templatesCache;

    // Precompile templates on app init
    if (!app.params.precompileTemplates) return;
    $('script[type="text/template7"]').each(function () {
        var id = $(this).attr('id');
        if (!id) return;
        Template7.templates[id] = Template7.compile($(this).html());
    });
};
