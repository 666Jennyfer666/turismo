using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class frmLocalidades : Form
    {
        //Creo un objeto de la clase localidades
            clsLocalidades myLocalidad = new clsLocalidades();
            //Creo una variable que me indica que está haciendo el usuario
            //La variable va a valer "A", cuando haga un alta de una Localidad
            //Va a valer "B", cuando esté haciendo una búsqueda
            //Va a valer "M", cuando esté modificando
            //Va a valer "C", cuando no esté haciendo nada
            string sEstado = "";

        public frmLocalidades()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

            //Cambio el estado de la variable a "C" porque no hace nada
            sEstado = "C";
            //DESPUES DE TENER LA LETRA EN sEstado, Ejecuto el metodo que muestra los botones
            ActivarBotones();
            //DESPUES DE ACTIVAR LOS BOTONES, Ejecuto el metodo que habilita los controles
            HabilitarControles();

        }

        #region METODO QUE ACTIVA LOS BOTONES DEL FORMULARIO

        private void ActivarBotones()
        {
            //Pregunto a la variable qué está haciendo el usuario
            switch (sEstado)
            {
                //Si está haciendo un alta
                case "A":

                    btnNuevo.Visible = false;
                    btnEditar.Visible = false;
                    btnBorrar.Visible = false;
                    btnBuscar.Visible = false;

                    btnAceptar.Visible = true;
                    btnCancelar.Visible = true;

                    btnSalir.Visible = false;
                    
                    break;

                //Si está haciendo una búsqueda
                case "B":

                    btnNuevo.Visible = false;
                    btnEditar.Visible = false;
                    btnBorrar.Visible = false;
                    btnBuscar.Visible = false;

                    btnAceptar.Visible = true;
                    btnCancelar.Visible = true;

                    btnSalir.Visible = false;

                    break;

                //Si no está haciendo nada
                case "C":

                    btnNuevo.Visible = true;
                    btnEditar.Visible = true;
                    btnBorrar.Visible = true;
                    btnBuscar.Visible = true;

                    btnAceptar.Visible = false;
                    btnCancelar.Visible = false;

                    btnSalir.Visible = true;

                    break;

                //Si está haciendo una modificación
                case "M":

                    btnNuevo.Visible = false;
                    btnEditar.Visible = false;
                    btnBorrar.Visible = false;
                    btnBuscar.Visible = false;

                    btnAceptar.Visible = true;
                    btnCancelar.Visible = true;

                    btnSalir.Visible = false;

                    break;

            }
        }

        #endregion

        #region METODO QUE HABILITA LOS CONTROLES DEL FORMULARIO

        private void HabilitarControles()
        {
            //Pregunto a la variable qué está haciendo el usuario
            switch (sEstado)
            {
                //Si está haciendo un alta
                case "A":

                    txtLocalidad.Enabled = true;

                    dgvLocalidad.Enabled = false;
                    gpbBusqueda.Visible = false;

                    dgvLocalidad.Height = 280;

                    break;

                //Si está haciendo una búsqueda
                case "B":

                    txtLocalidad.Enabled = false;

                    dgvLocalidad.Enabled = true;
                    gpbBusqueda.Visible = true;

                    dgvLocalidad.Height = 206;

                    break;

                //Si no está haciendo nada
                case "C":

                    txtLocalidad.Enabled = false;

                    dgvLocalidad.Enabled = true;
                    gpbBusqueda.Visible = false;

                    dgvLocalidad.Height = 280;

                    break;

                //Si está haciendo una modificación
                case "M":

                    txtLocalidad.Enabled = true;

                    dgvLocalidad.Enabled = false;
                    gpbBusqueda.Visible = false;

                    dgvLocalidad.Height = 280;

                    break;
            }
        }

        #endregion

        #region METODO QUE CARGA LOS DATOS DE LA BD

        private void CargarGrilla()
        {
            //creo la variable y guardo la consulta SQL
            string sMyCad = "select * from Vista_Localidades where activo = 1";
            //creo una tabla y ejecuto el metodo para cargarla
            DataTable myDt = clsMetodos.GetSql(sMyCad);
            // Oculto las columnas que sobran de la grilla
            dgvLocalidad.AutoGenerateColumns = false;
            //paso el resultado de la consulta a la grilla 
            dgvLocalidad.DataSource = myDt;
            //desabilito el reordenamiento de la grilla
            DeshabilitarOrdenGrillas();
        }
        #endregion

        #region METODO QUE DESHABILITA EL REORDENAMIENTO DE LAS GRILLAS DESDE SUS CABECERAS

        private void DeshabilitarOrdenGrillas()
        {
            foreach (DataGridViewColumn dgvCol in dgvLocalidad.Columns)
            {
                dgvCol.SortMode = DataGridViewColumnSortMode.NotSortable;
            }
        }
        #endregion 

        #region METODO QUE PASA LOS DATOS DE LA GRILLA AL OBJETO

        private void GrillaAObjeto()
        {
            //  Paso los datos de la fila actual de la grila a las propiedades de la clase
            myLocalidad.id_localidad = Convert.ToInt32(dgvLocalidad.CurrentRow.Cells["id_localidad"].Value);
            myLocalidad.nomLocalidad = Convert.ToString(dgvLocalidad.CurrentRow.Cells["nomLocalidad"].Value);
        }

        #endregion

        #region METODO QUE PASA LOS DATOS DEL OBJETO A LOS CONTROLES DEL FORMULARIO

        private void objetoAControles()
        {
            txtLocalidad.Text = myLocalidad.nomLocalidad;
        }

        #endregion

        #region EVENTO SELECTIONCHANGED DE LA GRILLA
        private void dgvLocalidad_SelectionChanged_1(object sender, EventArgs e)
        {
            //paso los datos a la grilla al objeto
            GrillaAObjeto();
            // paso los datos del objeto a los controles
            objetoAControles();
        }
        #endregion

        #region METODO QUE LIMPIA LOS CONTROLES DEL FORMULARIO

        private void LimpiarControles()
        {
            //limpio o vacio los controles del formulario para cargar uno nuevo
            txtLocalidad.Text = "";
            txtLocalidad.Focus();
        }

        #endregion

        #region MeTODO QUE HACE LA BUSQUEDA

        private void BuscarRegristro(string Buscado, string Campo)
        { 
            //creo la variable yguardo la consulta sql 
            string sMyCad = "Select * from Vista_Localidades where " + Campo + " like '" + Buscado + "%'" + " and activo = 1";
            //creo una tabla y ejecuto el metodo para cargarla
            DataTable myDt = clsMetodos.GetSql(sMyCad);
            //evito que se generen nuevas columnas de manera automatica
            dgvLocalidad.AutoGenerateColumns = false;
            //paso el resultado de la consulta a la grilla
            dgvLocalidad.DataSource = myDt;
        }

        #endregion

        private void txtBuscarLocalidad_TextChanged(object sender, EventArgs e)
        {
            // llamo al metodo que busca en la tabla localidades 
            // y le pasolo que el usuario esribio en el textbox de
            //busqueda como parametro y en que campo de la tabla
            //localidad buscar 
            BuscarRegristro(txtBuscarLocalidad.Text, "localidad");

        }

       

       

        

      

        #region METODO CARGAR FORMULARIO

        private void CargarFormulario()
        {
            //cambia el estado de la variable a "B" porque no esta haciendo nada
            sEstado = "C";
            //ejecuto el metodo que muestra los botones 
            ActivarBotones();
            //ejecuto metodo que habilita los controles
            HabilitarControles();
            //cargamos la grilla con los datos desde la BD
            CargarGrilla();
        }

        #endregion

        private void txtBuscarLocalidad_Enter(object sender, EventArgs e)
        {
            txtBuscarLocalidad.Text = "";
        }

        private void txtBuscarCP_Enter(object sender, EventArgs e)
        {
            txtBuscarLocalidad.Text = "";
        }

        #region METODO QUE PASA LOS DATOS DE LOS CONTROLES A LOS OBJETOS

        private void ControlesAOBjetos()
        {
            //paso los datos de los controles el objeto de la clase
            myLocalidad.nomLocalidad = txtLocalidad.Text;

        }

        #endregion

        private void btnBorrar_Click_1(object sender, EventArgs e)
        {
            DialogResult myRespuesta = MessageBox.Show("Desea realmente eliminar la Localidad seleccionada?", "CONFIRMAN", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            //SI LA RESPUESTA ES YES O SI
            if (myRespuesta == DialogResult.Yes)
            {
                int iIdLocalidad = Convert.ToInt32(dgvLocalidad.CurrentRow.Cells["id_localidad"].Value);
                string sMyCadena = "update id_localidad set activo = 0 where id_localidad =" + id_localidad;
                clsMetodos.GetSql(sMyCadena);
                CargarFormulario();
            }
        }

        private void btnAceptar_Click_1(object sender, EventArgs e)
        {
                 //variable que va a almacenar = 0 o 1 dependiendo del campo activo
            int iActivo = 1;
            // Variable que va a almacenar el id del usuario para la M y la B
            int iidlocalidad = 0;
            // Variable donde vamos a guardar los scripts para sql
            string sMyCad = "";
            // Traemos los datos de los controles al objeto
            ControlesAOBjetos();
            // Controlo que la propiedad Marca tengan datos
            if (myLocalidad.nomLocalidad == "")
            {
                // Muestro un mensaje indicando que faltan datos
                MessageBox.Show("Debe completar todos los datos !!!", "VERIFICAR", MessageBoxButtons.OK,
                    MessageBoxIcon.Warning);
                // RETORNAR
                return;
            }

            // Dependiendo de lo que este haciendo el usuario
            switch (sEstado)
            {
                case "A":
                    // Armo el script para hacer el insert
                    sMyCad = "insert into Localidades (id_localidad,localidad,activo) values ("
                        + "" + myLocalidad.id_localidad + ", '" +
                        myLocalidad.nomLocalidad + "', '" +
                        iActivo + ")";
                    // Ejecuto la consulta
                    clsMetodos.GetSql(sMyCad);

                    // Llamo al metodo que carga el formulario
                    CargarFormulario();
                    // Salgo del caso A
                    break;

                case "M":
                    // Tomo el id del usuario a modificar de la fila actual de la grilla
                    iidlocalidad = Convert.ToInt32(dgvLocalidad.CurrentRow.Cells["id_localidad"].Value);
                    // Armo el script para actualizar la BD con los cambios realizados al registro
                    sMyCad = "update Localidades set id_localidad = " + myLocalidad.id_localidad
                        + ", localidad = '" + myLocalidad.nomLocalidad +
                        "', activo = " + iActivo + " where id_localidad = " + iidlocalidad;

                    // Ejecuto la consulta
                    clsMetodos.GetSql(sMyCad);
                    // Llamo el metodo que carga el formulario
                    CargarFormulario();
                    // Salgo del caso M
                    break;

                case "B":

                    // Tomo el id del usuario a seleccionar de la fila actual de la grilla
                    iidlocalidad = Convert.ToInt32(dgvLocalidad.CurrentRow.Cells["Codigo"].Value);
                    // Hacer lo mismo que el boton cancelar
                    btnCancelar.PerformClick();
                    // Recorrer la grilla para buscar el id del usuario seleccionado
                    foreach (DataGridViewRow row in dgvLocalidad.Rows)
                    {
                        if (Convert.ToInt32(row.Cells["id_localidad"].Value) == iidlocalidad)
                        {
                            // Devuelvo el foco a la fila de la grilla desde donde se llamo
                            this.dgvLocalidad.CurrentCell = dgvLocalidad[1, row.Index];
                            // Ejecuto el evento selection changed de la grilla
                            EventArgs ea = new EventArgs();
                            this.dgvLocalidad_SelectionChanged_1(this.dgvLocalidad, ea);
                        }
                    }

                    // Salir
                    break;
            }
        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            // cierro el formulario
            this.Close();
        }

        private void btnCancelar_Click_1(object sender, EventArgs e)
        {
            CargarFormulario();
        }

        private void btnNuevo_Click_1(object sender, EventArgs e)
        {
            //Cambio el estado de la variable a "M" porque está haciendo una modificación
            sEstado = "M";
            //DESPUES DE TENER LA LETRA EN sEstado, Ejecuto el metodo que muestra los botones
            ActivarBotones();
            //DESPUES DE ACTIVAR LOS BOTONES, Ejecuto el metodo que habilita los controles
            HabilitarControles();   
        }

        private void btnEditar_Click_1(object sender, EventArgs e)
        {
            //Cambio el estado de la variable a "M" porque está haciendo una modificación
            sEstado = "M";
            //DESPUES DE TENER LA LETRA EN sEstado, Ejecuto el metodo que muestra los botones
            ActivarBotones();
            //DESPUES DE ACTIVAR LOS BOTONES, Ejecuto el metodo que habilita los controles
            HabilitarControles();
        }

        private void btnBuscar_Click_1(object sender, EventArgs e)
        {
            //Cambio el estado de la variable a "B" porque está haciendo una búsqueda
            sEstado = "B";
            //DESPUES DE TENER LA LETRA EN sEstado, Ejecuto el metodo que muestra los botones
            ActivarBotones();
            //DESPUES DE ACTIVAR LOS BOTONES, Ejecuto el metodo que habilita los controles
            HabilitarControles();
        }

       

        
        }

        
    }

