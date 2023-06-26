/* Creamos la base de datos */
create database BaseDatosCapacitacion

/* Creación de tablas */
/* Creamos las tablas que no dependen de otras */
create table Localidad (
id_localidad int identity (1,1),
nomLocalidad varchar (45),
activo  bit,
primary key (id_localidad)
)

create table Calificacion (
id_calificacion int identity (1,1),
calificacion varchar (50),
activo  bit,
primary key (id_calificacion)
)

/* Creamos la tabla que tiene id_ocalidad */
create table AtraccionVisitada (
id_atraccionVisitada int identity (1,1),
nomAtraccion varchar (50),
id_localidad int,
activo  bit,
primary key (id_atraccionVisitada),
foreign key (id_localidad) references Localidad(id_localidad)
)

/* Creamos la tabla de Comentarios que contiene las tablas anteriores */
create table Comentarios (
id_comentario int identity (1,1),
nomUsuario varchar (70),
apeUsuario varchar (70),
id_atraccionVisitada int,
id_calificacion int,
f_subida date,
h_subida time,
activo  bit,
primary key (id_comentario),
foreign key (id_atraccionVisitada) references AtraccionVisitada(id_atraccionVisitada),
foreign key (id_calificacion) references Calificacion(id_calificacion)
)

/* Creo la tabla de Notificaciones */
create table Notificaciones (
id_notificacion int identity (1,1),
nombreNotifi varchar (70),
apellidoNotifi varchar (70),
email varchar (70),
aceptoTermCond bit,
primary key (id_notificacion)
)

/* Creo la tabla de Consulta */
create table Consulta (
id_consulta int identity (1,1),
nomApeConsul varchar (120),
emailConsul varchar (100),
consulta varchar (520),
primary key (id_consulta)
)

/* Ponemos los datos de  */
insert into 