var Notes = function () {
    this.hideElementClass = 'hide-element';
    this.singleNoteContainerClass = 'note';
    this.collection = {
        "data": [
            {
                "id": 1,
                "title": "Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin tortor in hendrerit sagittis.",
                "description": "Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada leo lacus, quis facilisis nulla condimentum id. Nulla accumsan turpis ut arcu dapibus, condimentum aliquam dolor egestas. Nulla lacinia ligula scelerisque sapien fermentum bibendum. Duis a massa at ligula ornare pharetra at et augue. Donec id erat malesuada, commodo neque id, egestas ligula. Vestibulum quis quam sit amet arcu commodo posuere. Phasellus viverra a massa at cursus. Nullam a consectetur arcu. Cras ut eros mi. Vivamus nec pellentesque est. Cras vitae maximus sem, volutpat cursus risus. Quisque eu commodo turpis. Aliquam erat volutpat. Donec suscipit nisl vel eros tempor, vel pulvinar diam porttitor. Sed eu sem et libero commodo aliquet. Pellentesque posuere dolor congue, blandit quam quis, venenatis massa. Pellentesque felis nisl, scelerisque id sagittis id, egestas sit amet orci. Nulla rhoncus eros turpis, vitae varius quam aliquam ut. Pellentesque at varius libero. Suspendisse pulvinar faucibus arcu, semper dignissim quam sagittis ac. Fusce nibh velit, sagittis eget mattis sed, accumsan vitae nisl. Praesent mattis massa risus, et tincidunt turpis scelerisque vitae. Praesent in bibendum dui. Quisque accumsan volutpat pretium. Ut viverra eros ullamcorper lacinia molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec laoreet nisl.",
                "date_created": "13:30:00 20-07-2015",
                "date_last_updated": "13:30:00 20-07-2015"
            },
            {
                "id": 2,
                "title": "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin tortor in hendrerit sagittis.",
                "description": "Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada leo lacus, quis facilisis nulla condimentum id. Nulla accumsan turpis ut arcu dapibus, condimentum aliquam dolor egestas. Nulla lacinia ligula scelerisque sapien fermentum bibendum. Duis a massa at ligula ornare pharetra at et augue. Donec id erat malesuada, commodo neque id, egestas ligula. Vestibulum quis quam sit amet arcu commodo posuere. Phasellus viverra a massa at cursus. Nullam a consectetur arcu. Cras ut eros mi. Vivamus nec pellentesque est. Cras vitae maximus sem, volutpat cursus risus. Quisque eu commodo turpis. Aliquam erat volutpat. Donec suscipit nisl vel eros tempor, vel pulvinar diam porttitor. Sed eu sem et libero commodo aliquet. Pellentesque posuere dolor congue, blandit quam quis, venenatis massa. Pellentesque felis nisl, scelerisque id sagittis id, egestas sit amet orci. Nulla rhoncus eros turpis, vitae varius quam aliquam ut. Pellentesque at varius libero. Suspendisse pulvinar faucibus arcu, semper dignissim quam sagittis ac. Fusce nibh velit, sagittis eget mattis sed, accumsan vitae nisl. Praesent mattis massa risus, et tincidunt turpis scelerisque vitae. Praesent in bibendum dui. Quisque accumsan volutpat pretium. Ut viverra eros ullamcorper lacinia molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec laoreet nisl.",
                "date_created": "13:30:00 21-07-2015",
                "date_last_updated": "13:30:00 21-07-2015"
            },
            {
                "id": 3,
                "title": "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin tortor in hendrerit sagittis.",
                "description": "Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada leo lacus, quis facilisis nulla condimentum id. Nulla accumsan turpis ut arcu dapibus, condimentum aliquam dolor egestas. Nulla lacinia ligula scelerisque sapien fermentum bibendum. Duis a massa at ligula ornare pharetra at et augue. Donec id erat malesuada, commodo neque id, egestas ligula. Vestibulum quis quam sit amet arcu commodo posuere. Phasellus viverra a massa at cursus. Nullam a consectetur arcu. Cras ut eros mi. Vivamus nec pellentesque est. Cras vitae maximus sem, volutpat cursus risus. Quisque eu commodo turpis. Aliquam erat volutpat. Donec suscipit nisl vel eros tempor, vel pulvinar diam porttitor. Sed eu sem et libero commodo aliquet. Pellentesque posuere dolor congue, blandit quam quis, venenatis massa. Pellentesque felis nisl, scelerisque id sagittis id, egestas sit amet orci. Nulla rhoncus eros turpis, vitae varius quam aliquam ut. Pellentesque at varius libero. Suspendisse pulvinar faucibus arcu, semper dignissim quam sagittis ac. Fusce nibh velit, sagittis eget mattis sed, accumsan vitae nisl. Praesent mattis massa risus, et tincidunt turpis scelerisque vitae. Praesent in bibendum dui. Quisque accumsan volutpat pretium. Ut viverra eros ullamcorper lacinia molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec laoreet nisl.",
                "date_created": "13:30:00 21-07-2015",
                "date_last_updated": "13:30:00 21-07-2015"
            }
        ]
    };
    this.$notesContainer = $('#notes');
    this._guardCollectionDataKey();
    this._showCollection();
    this._addCreateNoteEventListener();
    this._addEditAndDeleteEvents();
    this._addSaveNotesEventListener();
};

Notes.prototype = {

    _addEditAndDeleteEvents: function () {
        this._addEditNoteEventListener();
        this._addDeleteNoteEventListener();
    },

    _showCollection: function () {
        var _this = this;
        $.each(this.collection.data, function(noteKey, note) {
            _this._showNote(note);
        });
    },

    _createNoteHtml: function (note) {
        var noteHtml =
            '<div data-note-id="' + note.id + '" data-note-date-created="' + note.date_created + '" data-last-update-created="' + note.date_last_updated + '"class="note">' +
            '<div><button class="edit-note btn btn-default"><i class="fa fa-pencil-square-o fa-1x"></i> EDIT</button> <button class="delete-note btn btn-default"><i class="fa fa-trash-o fa-1x"></i> DELETE</button></div>' +
            '<div><span class="creation-date">Created at: ' + note.date_created + '</span><span class="last-update-date">Last updated at: ' + note.date_last_updated + '</span></div>' +
            '<div><span class="title show">Title: ' + note.title + '</span></div>' +
            '<div><span class="description show">Description: ' + note.description + '</span></div>' +
            '<div><span class="title edit hide-element">Title: ' + '<input class="title-input" value="' + note.title + '"/></span></div>' +
            '<div><span class="description edit hide-element">Description: ' + '<textarea class="description-textarea">' + note.description + '</textarea></span></div>' +
            '</div>';

        return noteHtml;
    },

    _showNote: function (note) {
        this.$notesContainer.html( this.$notesContainer.html() + this._createNoteHtml(note));
    },
    _guardCollectionDataKey: function () {
        if (typeof this.collection.data === 'undefined') {
            throw new Error('Could not find data key in returned collection.');
        }
    },
    _addEditNoteEventListener: function () {
        var _this = this;

        var editButtons = document.getElementsByClassName("edit-note");

        for (var editButtonKey in editButtons) {
            var editButton = editButtons[editButtonKey];

            if (typeof editButton === 'object') {
                editButton.addEventListener("click", function (event) {

                    var button = this;
                    _this._addEditNoteEventHandler(button);
                });
            }
        }
    },
    _addDeleteNoteEventListener: function () {
        var _this = this;

        var deleteButtons = document.getElementsByClassName("delete-note");

        for (var deleteButtonKey in deleteButtons) {
            var deleteButton = deleteButtons[deleteButtonKey];

            if (typeof deleteButton === 'object') {
                deleteButton.addEventListener("click", function (event) {

                    var button = this;
                    _this._addDeleteNoteEventHandler(button);
                });
            }
        }

    },
    _addCreateNoteEventListener: function () {
        var _this = this;
        document.getElementById("new-note").addEventListener("click", function (event) {
            _this._addCreateNoteEventHandler();
        });
    },
    _addSaveNotesEventListener: function () {
        var _this = this;
        document.getElementById("save").addEventListener('click', function (event) {
            _this._addSaveChangesHandler();
        });
    },
    _addEditNoteEventHandler: function (button) {

        var noteContainer = Notes.findAncestor(button, this.singleNoteContainerClass);

        var showElements = noteContainer.getElementsByClassName('show');
        for (var showElementKey in showElements) {
            var showElement = showElements[showElementKey];
            if (typeof showElement === 'object') {
                Notes.addClassToElement(showElement, this.hideElementClass);
            }
        }

        var editElements = noteContainer.getElementsByClassName('edit');
        for (var editElementKey in editElements) {
            var editElement = editElements[editElementKey];
            if (typeof  editElement === 'object') {
                Notes.removeClassFromElement(editElement, this.hideElementClass);
            }
        }
    },
    _addDeleteNoteEventHandler: function (button) {
        var noteContainer = Notes.findAncestor(button, this.singleNoteContainerClass);
        noteContainer.parentNode.removeChild(noteContainer);
    },
    _addCreateNoteEventHandler: function (button) {
        var emptyNode = Notes.createEmptyNoteModelObject();

        console.log(emptyNode);

        this.$notesContainer.html(this.$notesContainer.html() + this._createNoteHtml(emptyNode));
        this._addEditAndDeleteEvents();
    },
    _addSaveChangesHandler: function () {
        var notes = document.getElementsByClassName('note'),
            newCollection = [];
        for (var noteKey in notes) {
            var noteElement = notes[noteKey];
            if (typeof noteElement === 'object') {
                var note = {};
                if (typeof noteElement.dataset.noteId !== 'undefined') {
                    note.id = noteElement.dataset.noteId;
                } else {
                    note.id = null;
                }

                if (typeof noteElement.dataset.noteDateCreated !== 'undefined') {
                    note.date_created = noteElement.dataset.noteDateCreated;
                } else {
                    throw new Error('data-note-date-created must be defined');
                }

                if (typeof noteElement.dataset.lastUpdateCreated !== 'undefined') {
                    note.date_last_updated = noteElement.dataset.lastUpdateCreated;
                } else {
                    throw new Error('data-last-update-created must be defined');
                }
                var titleInputs = noteElement.getElementsByClassName('title-input');
                if(titleInputs.length > 0){
                    var titleInput = titleInputs[0];
                    note.title = titleInput.value;
                }
                var descriptionTextareas = noteElement.getElementsByClassName('description-textarea');
                if (descriptionTextareas.length > 0){
                    var descriptionTextarea = descriptionTextareas[0];
                    note.description = descriptionTextarea.value;

                }

                newCollection.push(note);
            }
        }
        console.log(newCollection);
    }
};

Notes.EMPTY_NOTE_MODEL_OBJECT = {
    "id": null,
    "title": "",
    "description": "",
    "date_created": "",
    "date_last_updated": ""
};

Notes.createEmptyNoteModelObject = function () {
    var emptyNote = Notes.EMPTY_NOTE_MODEL_OBJECT,
        currentDate = new Date(),
        currentDateFormatted = currentDate.toLocaleString();

    emptyNote.date_created = currentDateFormatted;
    emptyNote.date_last_updated = currentDateFormatted;

    return emptyNote;
};

Notes.findAncestor = function (currentElement, requiredClass) {
    while ((currentElement = currentElement.parentElement) && !currentElement.classList.contains(requiredClass));

    return currentElement;
};

Notes.doesElementHaveAClass = function (element, className) {
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Notes.addClassToElement = function (element, className) {
    if (!Notes.doesElementHaveAClass(element, className)) element.className += " " + className;
};

Notes.removeClassFromElement = function (element, className) {
    if (Notes.doesElementHaveAClass(element, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
};


var myNotes;

window.onload = function () {
    (function () {
        myNotes = new Notes();
    })();
};
