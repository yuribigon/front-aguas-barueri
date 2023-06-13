import * as React from "react";

function NewForm() {
    const newFormRef = React.useRef(null);
    const editFormRef = React.useRef(null);

    function showForm() {
        const newForm = newFormRef.current;
        if (newForm.style.display === 'block') {
            newForm.style.display = 'none';
        } else {
            newForm.style.display = 'block';
        }
    }

    function showEditForm() {
        const editForm = editFormRef.current;
        if (editForm.style.display === 'block') {
            editForm.style.display = 'none';
        } else {
            editForm.style.display = 'block';
        }
    }

    React.useEffect(() => {
        const newForm = newFormRef.current;
        const editForm = editFormRef.current;

        if (newForm && editForm) {
            newForm.style.display = 'none';
            editForm.style.display = 'none';
        }
    }, []);

    return (
        <div>
            <div ref={newFormRef} className="new-form">
                Novo cadastro
            </div>
            <div ref={editFormRef} className="edit-form">
                Editar cadastro
            </div>

            <button id="btn-edit" className="btn-edit" onClick={showEditForm}>
                <span class="material-symbols-outlined">
                    edit
                </span>
            </button>
            <button id="btn-new" className="btn-new" onClick={showForm}>
                <span class="material-symbols-outlined">
                    add
                </span>
            </button>
        </div>
    )

}

export default NewForm;