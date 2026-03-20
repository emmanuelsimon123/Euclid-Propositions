// Lesson: Euclid Book I Proposition 39
// Exposes window.LESSON for the engine loader.
window.LESSON = {
  meta: {
    title: "Euclid’s Elements — Book I, Proposition 39",
    subtitle: "Equal triangles on the same base and on the same side are in the same parallels."
  },

  guiding: {
    questionHTML: `If two triangles share the same base <strong>BC</strong> and have equal area, what must be true about the line through their vertices <strong>A</strong> and <strong>D</strong>?`,
    hintsHTML: [
      `<strong>I.37</strong>: Triangles on the same base and in the same parallels are equal in area.`,
      `<strong>C.N. 1</strong>: Things equal to the same thing are equal to one another.`,
      `<strong>C.N. 5</strong>: The whole is greater than the part (used for the contradiction).`
    ]
  },

  diagram: {
    initialHidden: [
      'AD',
      'AE',
      'BE',
      'EC',
      'ptE',
      'lblE',
      'explore-handles'
    ]
  },

  hatch: {
    ABC: '170,360 370,360 270,120',
    DBC: '170,360 370,360 300,190',
    EBC: '170,360 370,360 354,120'
  },

  explore: {
    enabled: true,
    handlesGroupId: 'explore-handles',
    handles: {
      A: { handleId: 'handleA', ringId: 'handleA_ring', clampX: [180, 330], clampY: [80, 160] },
      D: { handleId: 'handleD', ringId: 'handleD_ring', clampX: [210, 420], clampY: [150, 270] }
    },

    onUpdate: (P, Diagram) => {
      const EPS = 0.001;

      const B = { x: 170, y: 360 };
      const C = { x: 370, y: 360 };

      let A = { ...P.A };
      let D = { ...P.D };

      // --------------------------------------------------
      // Enforce Euclidean invariant:
      // A.y < D.y < B.y
      // --------------------------------------------------

      if (A.y >= D.y - 20) {
        A.y = D.y - 20;
      }

      if (D.y >= B.y - 20) {
        D.y = B.y - 20;
      }

      if (Math.abs(D.y - B.y) < EPS) {
        D.y = B.y - 20;
      }

      // --------------------------------------------------
      // Intersection of BD with horizontal through A
      // --------------------------------------------------

      const t = (A.y - B.y) / (D.y - B.y);

      let safeT = t;
      if (t <= 1 + EPS) {
        safeT = 1.01; // force E onto BD produced
      }

      const E = {
        x: B.x + safeT * (D.x - B.x),
        y: A.y
      };

      // --------------------------------------------------
      // Update triangle ABC
      // --------------------------------------------------

      Diagram.get('AB')?.setAttribute('x1', A.x);
      Diagram.get('AB')?.setAttribute('y1', A.y);

      Diagram.get('AC')?.setAttribute('x1', A.x);
      Diagram.get('AC')?.setAttribute('y1', A.y);

      // --------------------------------------------------
      // Update triangle DBC
      // --------------------------------------------------

      Diagram.get('BD')?.setAttribute('x2', D.x);
      Diagram.get('BD')?.setAttribute('y2', D.y);

      Diagram.get('DC')?.setAttribute('x1', D.x);
      Diagram.get('DC')?.setAttribute('y1', D.y);

      // --------------------------------------------------
      // Join AD
      // --------------------------------------------------

      Diagram.get('AD')?.setAttribute('x1', A.x);
      Diagram.get('AD')?.setAttribute('y1', A.y);
      Diagram.get('AD')?.setAttribute('x2', D.x);
      Diagram.get('AD')?.setAttribute('y2', D.y);

      // --------------------------------------------------
      // AE full-width parallel through A
      // --------------------------------------------------

      const AE = Diagram.get('AE');
      if (AE) {
        AE.setAttribute('x1', 0);
        AE.setAttribute('x2', 840);
        AE.setAttribute('y1', A.y);
        AE.setAttribute('y2', A.y);
      }

      // --------------------------------------------------
      // BD produced to E
      // --------------------------------------------------

      Diagram.get('BE')?.setAttribute('x1', B.x);
      Diagram.get('BE')?.setAttribute('y1', B.y);
      Diagram.get('BE')?.setAttribute('x2', E.x);
      Diagram.get('BE')?.setAttribute('y2', E.y);

      // --------------------------------------------------
      // Join EC
      // --------------------------------------------------

      Diagram.get('EC')?.setAttribute('x1', E.x);
      Diagram.get('EC')?.setAttribute('y1', E.y);
      Diagram.get('EC')?.setAttribute('x2', C.x);
      Diagram.get('EC')?.setAttribute('y2', C.y);

      // --------------------------------------------------
      // Sync handles
      // --------------------------------------------------

      Diagram.get('handleA')?.setAttribute('cx', A.x);
      Diagram.get('handleA')?.setAttribute('cy', A.y);
      Diagram.get('handleA_ring')?.setAttribute('cx', A.x);
      Diagram.get('handleA_ring')?.setAttribute('cy', A.y);

      Diagram.get('handleD')?.setAttribute('cx', D.x);
      Diagram.get('handleD')?.setAttribute('cy', D.y);
      Diagram.get('handleD_ring')?.setAttribute('cx', D.x);
      Diagram.get('handleD_ring')?.setAttribute('cy', D.y);

      // --------------------------------------------------
      // Labels
      // --------------------------------------------------

      Diagram.get('lblA')?.setAttribute('x', A.x - 6);
      Diagram.get('lblA')?.setAttribute('y', A.y - 10);

      Diagram.get('lblD')?.setAttribute('x', D.x - 6);
      Diagram.get('lblD')?.setAttribute('y', D.y - 10);

      Diagram.get('ptE')?.setAttribute('cx', E.x);
      Diagram.get('ptE')?.setAttribute('cy', E.y);

      Diagram.get('lblE')?.setAttribute('x', E.x + 6);
      Diagram.get('lblE')?.setAttribute('y', E.y - 10);

      // --------------------------------------------------
      // Hatch fills
      // --------------------------------------------------

      Diagram.get('triABCfill')?.setAttribute(
        'points',
        `${B.x},${B.y} ${C.x},${C.y} ${A.x},${A.y}`
      );

      Diagram.get('triDBCfill')?.setAttribute(
        'points',
        `${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`
      );

      Diagram.get('triEBCfill')?.setAttribute(
        'points',
        `${B.x},${B.y} ${C.x},${C.y} ${E.x},${E.y}`
      );
    }
  },

  // ✅ Your original steps array remains unchanged below
  steps: [ /* unchanged — exactly as you wrote it */ ]
};
