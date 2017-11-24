import { editorLocalization } from "../editorLocalization";

var italianTranslation = {
  // strings for survey templates
  survey: {
    dropQuestion: "Aggiungi una domanda qui",
    copy: "Copia",
    addToToolbox: "Aggiungi alla toolbox",
    deletePanel: "Elimina pannello",
    deleteQuestion: "Elimina domanda"
  },
  // strings for question types
  qt: {
    checkbox: "Casella di controllo ",
    comment: "Commento",
    dropdown: "Combo",
    file: "Archivio",
    html: "Html",
    matrix: "Matrice (unica opzione)",
    matrixdropdown: "Matrice (opzioni multiple)",
    matrixdynamic: "Matrice (dinamica)",
    multipletext: "Testo multiplo",
    panel: "Pannello",
    radiogroup: "Opzione multipla",
    rating: "Valutazione",
    text: "Testo semplice"
  },
  // strings for editor
  ed: {
    addNewPage: "Aggiungi nuova pagina",
    newPageName: "pagina",
    newQuestionName: "domanda",
    newPanelName: "pannello",
    testSurvey: "Testa questionario",
    testSurveyAgain: "Testa questionario di nuovo",
    testSurveyWidth: "Testa questionario con: ",
    embedSurvey: "Includi questionario",
    saveSurvey: "Salva questionario",
    designer: "Disegna",
    jsonEditor: "Modifica JSON",
    undo: "Annulla",
    redo: "Ripeti",
    options: "Opzioni",
    generateValidJSON: "Genera JSON valido",
    generateReadableJSON: "Genera JSON leggibile",
    toolbox: "Strumenti",
    delSelObject: "Elimina oggetto selezionato",
    correctJSON: "Per favore, correggi il tuo JSON",
    surveyResults: "Risultati del questionario: "
  },
  // strings for property editors
  pe: {
    apply: "Applica",
    ok: "Accetta",
    cancel: "Annulla",
    reset: "Reimposta",
    close: "Chiudi",
    delete: "Elimina",
    addNew: "Nuovo",
    removeAll: "Elimina tutto",
    edit: "Modifica",
    empty: "<vuoto>",
    fastEntry: "Inserimento rapido",
    formEntry: "Inserimento con dati ",
    testService: "Test del servizio",
    expressionHelp:
      "Per favore, inserire una espressione booleana. Ad esempio: {domanda1} = 'valore1' or ({domanda2} = 3 and {domanda3} < 5)",
    propertyIsEmpty: "Per favore, inserire un valore per la propietà",
    value: "Valore",
    text: "Testo",
    required: "Richiesto",
    columnEdit: "Modifica colonna: {0}",
    itemEdit: "Modifica elemento: {0}",
    hasOther: "Altri elementi",
    name: "Nome",
    title: "Titolo",
    cellType: "Tipo di cella",
    colCount: "Numero di colonne",
    choicesOrder: "Seleziona altre opzioni",
    visible: "Visibile",
    isRequired: "Richiesto",
    startWithNewLine: "Nuova linea",
    rows: "Numero di righe",
    placeHolder: "Testo di riferimento",
    showPreview: "Mostra anteprima",
    storeDataAsText: "Vedi il contenuto JSON come testo",
    maxSize: "Dimensione massima in bytes",
    imageHeight: "Altezza",
    imageWidth: "Larghezza",
    rowCount: "Numero delle righe",
    addRowText: "Testo del pulsante per aggiungere una nuova righa",
    removeRowText: "Testo del pulsante per eliminare una righa",
    minRateDescription: "Descrizione del valore minimo",
    maxRateDescription: "Descrizione del valore massimo",
    inputType: "Tipo di inserimento",
    optionsCaption: "Titolo dell'opzione",
    qEditorTitle: "Modifica domanda: {0}",
    tabs: {
      general: "Generale",
      fileOptions: "Opzioni",
      html: "Modifica Html",
      columns: "Colonne",
      rows: "Righe",
      choices: "Scelte",
      visibleIf: "Visibile se",
      rateValues: "Volori della classifica",
      choicesByUrl: "Opzioni dal Web",
      matrixChoices: "Opzioni predefinite",
      multipleTextItems: "Voci di testo",
      validators: "Validazioni"
    },
    editProperty: "Modifca propietà '{0}'",
    items: "[ Elemento: {0} ]",
    enterNewValue: "Si prega di inserire il valore.",
    noquestions: "Non c'è alcun dubbio nel questionario.",
    createtrigger: "Si prega di creare un trigger",
    triggerOn: "Attivazione ",
    triggerMakePagesVisible: "Rendere visibili le pagine:",
    triggerMakeQuestionsVisible: "Rendere visibili le domande:",
    triggerCompleteText: "Completare il questionario, in caso di successo.",
    triggerNotSet: "Non impostato",
    triggerRunIf: "Esegui se",
    triggerSetToName: "Cambia il valore a: ",
    triggerSetValue: "a: ",
    triggerIsVariable:
      "Non posizionare la variabile del risultato del questionario",
    verbChangeType: "Cambia tipo ",
    verbChangePage: "Cambia pagina "
  },
  // strings for operators
  op: {
    empty: "è vuoto",
    notempty: "non è vuoto ",
    equal: "è uguale a",
    notequal: "non è uguale a",
    contains: "contiene",
    notcontains: "non contiene",
    greater: "maggiore",
    less: "minore",
    greaterorequal: "maggiore o uguale",
    lessorequal: "minore o uguale"
  },
  // strings for embed window
  ew: {
    angular: "Versione per Angular",
    jquery: "Versione per jQuery",
    knockout: "Versione per Knockout",
    react: "Versione per React",
    vue: "Versione per Vue",
    bootstrap: "Per framework bootstrap",
    standard: "No bootstrap",
    showOnPage: "Visualizza in questa pagina",
    showInWindow: "Visualizza in una finestra",
    loadFromServer: "Carica JSON dal server",
    titleScript: "Scripts e stili",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // strings of properties
  p: {
    name: "nome",
    title: {
      name: "titolo",
      title: "Lascia vuoto se è lo stesso di 'Nome'"
    },
    survey_title: {
      name: "titolo",
      title: "Visualizzato in ogni pagina."
    },
    page_title: {
      name: "titolo",
      title: "Titolo della pagina"
    },
    indent: "rientro",
    inputType: "tipo di inserimento",
    isRequired: "richiesto",
    placeHolder: "testo di riferimento",
    size: "numero massimo di caratteri",
    readOnly: "sola lettura"
  }
};

editorLocalization.locales["it"] = italianTranslation;
