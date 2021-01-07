//--------------------------------------
// Main
//--------------------------------------

moveSidebarToLeft();

//--------------------------------------
// Register key listeners
//--------------------------------------

Mousetrap.bind('d', function() { 
    hotkeyDetailsTab();
});

Mousetrap.bind('f', function() { 
    hotkeyFilesTab();
});

Mousetrap.bind('a', function() { 
    hotkeyActivityTab();
});

Mousetrap.bind('j', function() { 
    hotkeyPreviousFile();
});

Mousetrap.bind('k', function() { 
    hotkeyNextFile();
});

//--------------------------------------
// Startup functions
//--------------------------------------

function moveSidebarToLeft() { 
    var items = $('#bb-sidebar').parent().children().toArray();
    items.reverse();
    $.each(items, function () {
        $('#bb-sidebar').parent().append(this);
    });    
}

//--------------------------------------
// Hotkey functions
//--------------------------------------

function hotkeyDetailsTab() { 
    $("div[data-testid='sidebar-tab-details']").trigger("click");
}

function hotkeyFilesTab() { 
    $("div[data-testid='sidebar-tab-files']").trigger("click");
}

function hotkeyActivityTab() { 
    $("div[data-testid='sidebar-tab-activity']").trigger("click");
}

function hotkeyPreviousFile() { 
    var currentFileHash = window.location.hash

    var fileAnchors = $('a[href^="#chg-"]').toArray();
    var fileHashes = fileAnchors.map(anchor => {
        return anchor.hash
    })

    var currentIndex = fileHashes.indexOf(currentFileHash)
    
    if (currentIndex > 0) { 
        var nextIndex = currentIndex - 1;
        $('a[href^="#chg-"]').eq(nextIndex).get(0).click();
    }
}

function hotkeyNextFile() { 
    var currentFileHash = window.location.hash

    var fileAnchors = $('a[href^="#chg-"]').toArray();    
    var fileHashes = fileAnchors.map(anchor => {
        return anchor.hash
    })

    var currentIndex = fileHashes.indexOf(currentFileHash)
    
    if (currentIndex < 0 && fileHashes.length > 1) { 
        var nextIndex = 1;
        $('a[href^="#chg-"]').eq(nextIndex).get(0).click();
    } else if (currentIndex < (fileHashes.length - 1)) { 
        var nextIndex = currentIndex + 1;
        $('a[href^="#chg-"]').eq(nextIndex).get(0).click();
    }
}