AFRAME.registerComponent("posters", {
    init: function() {
        this.placesContainer = this.el;
        this.createPosters();
    },
    createPosters: function () {
        const thumbNailsRef = [
        {
            id: "superman",
            title: "Superman",
            url: "./assets/Superman.jpg",
        },
        {
            id: "spiderman",
            title: "Spiderman",
            url: "./assets/Spiderman.webp",
        },

        {
            id: "captian-aero",
            title: "Captian Aero",
            url: "./assets/Captian-Aero.jpg",
        },
        {
            id: "outer-space",
            title: "Outer Space",
            url: "./assets/Outer-Space.webp",
        },
        ];
    
        let prevoiusXPosition = -53;

        for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 20;
            const posZ = 0.1;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            const borderEl = this.createBorder(position, item.id);

            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.placesContainer.appendChild(borderEl);
        }
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 25
        });
        entityEl.setAttribute("material", { src: item.url });

        return entityEl;
    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 27
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "#fff",
            opacity: 0.1,
        });

        return entityEl;
    },
    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 70,
            color: "#e65100",
            value: item.title,
        });
        const elPosition = position;
        elPosition.y = 17;
        elPosition.x = 0;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
});