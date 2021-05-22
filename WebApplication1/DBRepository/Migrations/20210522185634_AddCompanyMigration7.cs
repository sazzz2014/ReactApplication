using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class AddCompanyMigration7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    SenderCity = table.Column<string>(nullable: true),
                    SenderAddress = table.Column<string>(nullable: true),
                    RecipientCity = table.Column<string>(nullable: true),
                    RecipientAddress = table.Column<string>(nullable: true),
                    Weight = table.Column<decimal>(nullable: false),
                    PickUpDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
