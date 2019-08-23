var linkedListManager = function () {

    var list = createList();
    var addBeginButton, addEndButton, inputValue;
    var inputIndex, addByIndexButton;
    var dataSizeDiv, dataQuantityDiv;
    var inputValueByte, findDataByteButton, dataBytesDiv;
    var sortButton, removeListButton;
    var table, tableHeader, tableBody;
    var consoleContent;
    var init = function () {
            addBeginButton = $("#btnAddBeginning");
            addEndButton = $("#btnAddEnd");
            inputValue = $("#inpValue");

            inputIndex = $("#inpIndex");
            addByIndexButton = $("#btnAddByIndex");

            dataSizeDiv = $("#dataSize");
            dataQuantityDiv = $("#dataQuantity");

            inputValueByte = $("#inpValueForByte");
            findDataByteButton = $("#findDataByte");
            dataBytesDiv = $("#dataSizeBytes");

            sortButton = $("#btnSort");
            removeListButton = $("#btnRemoveList");
            table = $("#content table");
            tableHeader = $("#content table thead");
            tableBody = $("#content table tbody");

            consoleContent = $(".consoleContent");

            list.insertAt(1, "Data5", "Data2", "Data4", "Data3");
            reload();
            initEvents();
        },

        initEvents = function () {
            setInterval(function () {
                if ($('.consoleCursor').css('opacity') === 1) {
                    $('.consoleCursor').css("opacity", "0");
                } else {
                    $('.consoleCursor').css("opacity", "1");
                }
            }, 300);
            addBeginButton.on("click", function () {
                if (validateData()) {
                    list.insertBeginning(`${inputValue.val()}`);
                    reload();
                }
            });

            addEndButton.on("click", function () {
                if (validateData()) {
                    list.insertAtEnd(`${inputValue.val()}`);
                    reload();
                }
            });

            addByIndexButton.on("click", function () {
                if (inputIndex.val() > 0 && validateData()) {
                    var index = inputIndex.val();
                    list.insertAt(index, inputValue.val());
                    reload();
                    inputIndex.val(++index);
                }
            });

            findDataByteButton.on("click", function () {
                if (inputValueByte.val()) {
                    dataBytesDiv.html("Size   " + list.getSizeWithBytes(`${inputValueByte.val()}`));
                }
            });

            sortButton.on("click", function () {
                list.sortList();
                reload();
            });

            removeListButton.on("click", function () {
                list.eraseList();
                reload();
            });

            //On Click live Events
            tableBody.on("click", ".btnDataRemove", function () {
                list.removeElement(`${$(this).parent("td").data("value")}`);
                reload();
            });
        },

        reload = function () {
            showData();
            inputValue.val("");
            inputIndex.val(1);
            dataSizeDiv.html("Size   " + list.getSize());
            dataQuantityDiv.html("Quantity   " + list.getQuantity());
            consoleLoging();
        },

        consoleLoging = function () {
            consoleContent.html("");
            let html = "";
            if (list.head === null) return null;
            let linked = list.head;
            while (linked !== null) {
                if (linked.element !== undefined) {
                    html += `${linked.element}</br>`;
                    if (linked.next) html += "<-->";
                    html += "</br>";
                    linked = linked.next;
                }
                consoleContent.html(html);
            }

        },

        showData = function () {
            //Remove all table data
            tableBody.find("tr").remove();

            //Get linked list data
            if (list.head === null)
                return null;
            let linked = list.head;
            let index = 1;
            while (linked !== null) {
                tableBody.append(tableTemplate(index++, linked.element));
                linked = linked.next;
            }
        },

        tableTemplate = function (index, value) {
            var html = `<tr>`;
            html += `<td>${index}</td>`;
            html += `<td>${value}</td>`;
            html += `<td data-value="${value}"><button type="button" class="btnDataRemove btn btn-danger fa fa-trash" style="float:right;"></button></td>`;
            html += `</tr>`;
            return html;
        },

        validateData = function () {
            return !!inputValue.val();
        };

    return {
        init: init
    };
}();