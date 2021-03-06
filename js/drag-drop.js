! function (n, e) {
    function t(n, e) {
        return e.parentNode.insertBefore(n, e.nextSibling)
    }

    function a() {
        var n = navigator.userAgent.toLowerCase();
        return -1 !== n.indexOf("msie") ? parseInt(n.split("msie")[1]) : !1
    }
    var r, o, d, i = null,
        s = null;
    return o = function () {
        function e(e, t) {
            d = this, o = e, d.options = n.extend({}, d.options, t), d.options.drag && (9 === a() && o.find("thead tr th").each(function () {
                0 === n(this).find(".drag-ie").length && n(this).html(n("<a>").html(n(this).html()).attr("href", "#").addClass("drag-ie"))
            }), r = o.find("thead tr th"), jQuery.event.addProp("dataTransfer"), [].forEach.call(r, function (e) {
                e.setAttribute("draggable", !0), n(e).on("dragstart", d.handleDragStart), n(e).on("dragenter", d.handleDragEnter), n(e).on("dragover", d.handleDragOver), n(e).on("dragleave", d.handleDragLeave), n(e).on("drop", d.handleDrop), n(e).on("dragend", d.handleDragEnd)
            }))
        }
        var o;
        return e.prototype = {
            options: {
                drag: !0,
                dragClass: "drag",
                overClass: "over",
                movedContainerSelector: ".dnd-moved"
            },
            handleDragStart: function (e) {
                n(this).addClass(d.options.dragClass), i = this, e.dataTransfer.effectAllowed = "copy", e.dataTransfer.setData("text/html", this.id)
            },
            handleDragOver: function (n) {
                n.preventDefault && n.preventDefault(), n.dataTransfer.dropEffect = "copy"
            },
            handleDragEnter: function (e) {
                s = this, [].forEach.call(r, function (e) {
                    n(e).removeClass(d.options.overClass)
                }), n(this).addClass(d.options.overClass)
            },
            handleDragLeave: function (n) {},
            handleDrop: function (e) {
                e.stopPropagation && e.stopPropagation(), i !== e && d.moveColumns(n(i).index(), n(this).index())
            },
            handleDragEnd: function (e) {
                var t = {
                    array: [],
                    object: {}
                };
                [].forEach.call(r, function (e) {
                    var a = n(e).attr("data-name") || n(e).index();
                    n(e).removeClass(d.options.overClass), t.object[a] = n(e).index(), t.array.push(n(e).index())
                }), "function" == typeof d.options.onDragEnd && d.options.onDragEnd(t), n(i).removeClass(d.options.dragClass)
            },
            moveColumns: function (n, e) {
                for (var a = o.find(d.options.movedContainerSelector), r = 0; r < a.length; r++) e > n ? t(a[r].children[n], a[r].children[e]) : e < o.find("thead tr th").length - 1 && a[r].insertBefore(a[r].children[n], a[r].children[e])
            }
        }, e
    }(), n.fn.extend({
        dragableColumns: function () {
            var e = arguments[0];
            return this.each(function () {
                var t = n(this);
                new o(t, e)
            })
        }
    })
}(window.jQuery, window);