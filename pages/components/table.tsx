const Table = () => {
  return (
    <div className="nsw-table" tabIndex={0}>
      <table>
        <caption>Table caption for responsive scroll version</caption>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Method</th>
            <th style={{ width: "40%" }}>Description</th>
            <th style={{ width: "40%" }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <a href="#">Annotated prototypes</a>
              </p>
            </td>
            <td>
              <p>
                Prototypes that include brief notes or comments that
                explain the rationale behind features and design
                choices.
              </p>
            </td>
            <td>
              <p>
                Help give context behind decisions and reminds team
                members why specific design elements were selected.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <a href="#">Storyboards</a>
              </p>
            </td>
            <td>
              <p>
                Sequential images showing the main interactions or
                events that take place throughout a service.
              </p>
            </td>
            <td>
              <p>
                Help team members and stakeholders visualize the
                intended user experience.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <a href="#">Service blueprint</a>
              </p>
            </td>
            <td>
              <p>
                A diagram that visualizes a new process or service and
                how the organization’s internal processes, people,
                systems and policies will support it.
              </p>
            </td>
            <td>
              <p>
                Helps organizations understand what will be needed for
                a successful implementation.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <a href="#">User stories</a>
              </p>
            </td>
            <td>
              <p>
                Short sentences written from the perspective of users,
                describing their need and the reason behind.
              </p>
            </td>
            <td>
              <p>
                Help document the different needs that a service must
                address, shifting the focus from creating detailed
                requirements to discussing user needs within a
                specific context.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
