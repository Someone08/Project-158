AFRAME.registerComponent("cursor", {
    schema: {
        selectedItemId: {default: "", type: "string"}
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const postersId = ["superman", "spiderman", "captian-areo", "outer-space"];
            if (postersId.includes(id)) {
                const postersContainer = document.querySelector("#poster");
                postersContainer.setAttribute("cursor-listener", {
                    selectedItemId: id,
                });
                this.el.setAttribute("material", {color: "#165c0"});
            }
        });
    },
    handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {
                        color: "#fff",
                        opacity: 0.1,
                });
              }
            }
        });
    }
})