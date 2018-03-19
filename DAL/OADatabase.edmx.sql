
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 03/15/2018 15:03:43
-- Generated from EDMX file: C:\Users\TANC44\Desktop\Develop\MyGithub\MyOA\DAL\OADatabase.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [OADB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Stationery_InventoryStationery]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Stationery_Inventory] DROP CONSTRAINT [FK_Stationery_InventoryStationery];
GO
IF OBJECT_ID(N'[dbo].[FK_Stationery_InventoryInventory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Stationery_Inventory] DROP CONSTRAINT [FK_Stationery_InventoryInventory];
GO
IF OBJECT_ID(N'[dbo].[FK_OrderAccount]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [FK_OrderAccount];
GO
IF OBJECT_ID(N'[dbo].[FK_OrderStationery]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [FK_OrderStationery];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Stationeries]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Stationeries];
GO
IF OBJECT_ID(N'[dbo].[Inventories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Inventories];
GO
IF OBJECT_ID(N'[dbo].[Stationery_Inventory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Stationery_Inventory];
GO
IF OBJECT_ID(N'[dbo].[Orders]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Orders];
GO
IF OBJECT_ID(N'[dbo].[Accounts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Accounts];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Stationeries'
CREATE TABLE [dbo].[Stationeries] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(255)  NOT NULL,
    [Color] nvarchar(50)  NULL,
    [Size] nvarchar(50)  NULL,
    [Description] nvarchar(max)  NULL,
    [IsBelongToGroup] bit  NOT NULL,
    [Photo] varbinary(max)  NULL,
    [CreateDate] datetime  NULL,
    [CreateUser] nvarchar(100)  NULL,
    [UpdateDate] datetime  NULL,
    [UpdateUser] nvarchar(100)  NULL
);
GO

-- Creating table 'Inventories'
CREATE TABLE [dbo].[Inventories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Amount] int  NOT NULL,
    [RemainingAmount] int  NOT NULL,
    [CreateDate] datetime  NULL,
    [CreateUser] nvarchar(100)  NULL,
    [UpdateDate] datetime  NULL,
    [UpdateUser] nvarchar(100)  NULL
);
GO

-- Creating table 'Stationery_Inventory'
CREATE TABLE [dbo].[Stationery_Inventory] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Stationery_Id] int  NOT NULL,
    [Inventory_Id] int  NOT NULL
);
GO

-- Creating table 'Orders'
CREATE TABLE [dbo].[Orders] (
    [Id] bigint IDENTITY(1,1) NOT NULL,
    [Status] nvarchar(50)  NULL,
    [Amount] int  NOT NULL,
    [IsBelongToGroup] bit  NOT NULL,
    [CreateDate] datetime  NULL,
    [CreateUser] nvarchar(100)  NULL,
    [UpdateDate] datetime  NULL,
    [UpdateUser] nvarchar(100)  NULL,
    [Account_Id] int  NULL,
    [Stationery_Id] int  NOT NULL
);
GO

-- Creating table 'Accounts'
CREATE TABLE [dbo].[Accounts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(100)  NOT NULL,
    [Budget] nvarchar(max)  NOT NULL,
    [RemainingBudget] nvarchar(max)  NOT NULL,
    [IsGroupApplicant] bit  NOT NULL,
    [IsAdmin] bit  NOT NULL,
    [Photo] varbinary(max)  NULL,
    [CreateDate] datetime  NULL,
    [CreateUser] nvarchar(100)  NULL,
    [UpdateDate] datetime  NULL,
    [UpdateUser] nvarchar(100)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Stationeries'
ALTER TABLE [dbo].[Stationeries]
ADD CONSTRAINT [PK_Stationeries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Inventories'
ALTER TABLE [dbo].[Inventories]
ADD CONSTRAINT [PK_Inventories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Stationery_Inventory'
ALTER TABLE [dbo].[Stationery_Inventory]
ADD CONSTRAINT [PK_Stationery_Inventory]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Orders'
ALTER TABLE [dbo].[Orders]
ADD CONSTRAINT [PK_Orders]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Accounts'
ALTER TABLE [dbo].[Accounts]
ADD CONSTRAINT [PK_Accounts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Stationery_Id] in table 'Stationery_Inventory'
ALTER TABLE [dbo].[Stationery_Inventory]
ADD CONSTRAINT [FK_Stationery_InventoryStationery]
    FOREIGN KEY ([Stationery_Id])
    REFERENCES [dbo].[Stationeries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Stationery_InventoryStationery'
CREATE INDEX [IX_FK_Stationery_InventoryStationery]
ON [dbo].[Stationery_Inventory]
    ([Stationery_Id]);
GO

-- Creating foreign key on [Inventory_Id] in table 'Stationery_Inventory'
ALTER TABLE [dbo].[Stationery_Inventory]
ADD CONSTRAINT [FK_Stationery_InventoryInventory]
    FOREIGN KEY ([Inventory_Id])
    REFERENCES [dbo].[Inventories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Stationery_InventoryInventory'
CREATE INDEX [IX_FK_Stationery_InventoryInventory]
ON [dbo].[Stationery_Inventory]
    ([Inventory_Id]);
GO

-- Creating foreign key on [Account_Id] in table 'Orders'
ALTER TABLE [dbo].[Orders]
ADD CONSTRAINT [FK_OrderAccount]
    FOREIGN KEY ([Account_Id])
    REFERENCES [dbo].[Accounts]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OrderAccount'
CREATE INDEX [IX_FK_OrderAccount]
ON [dbo].[Orders]
    ([Account_Id]);
GO

-- Creating foreign key on [Stationery_Id] in table 'Orders'
ALTER TABLE [dbo].[Orders]
ADD CONSTRAINT [FK_OrderStationery]
    FOREIGN KEY ([Stationery_Id])
    REFERENCES [dbo].[Stationeries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OrderStationery'
CREATE INDEX [IX_FK_OrderStationery]
ON [dbo].[Orders]
    ([Stationery_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------