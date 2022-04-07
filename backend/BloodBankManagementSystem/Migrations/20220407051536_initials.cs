using Microsoft.EntityFrameworkCore.Migrations;

using System;

namespace BloodBankManagementSystem.Migrations
{
    public partial class initials : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blooddonors",
                columns: table => new
                {
                    BloodDonorID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blooddonors", x => x.BloodDonorID);
                });

            migrationBuilder.CreateTable(
                name: "BloodDonorDonations",
                columns: table => new
                {
                    BloodDonationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BloodDonorID = table.Column<int>(type: "int", nullable: false),
                    BloodDonationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumberofBottles = table.Column<int>(type: "int", nullable: false),
                    Weight = table.Column<int>(type: "int", nullable: false),
                    HBCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodDonorDonations", x => x.BloodDonationID);
                    table.ForeignKey(
                        name: "FK_BloodDonorDonations_Blooddonors_BloodDonorID",
                        column: x => x.BloodDonorID,
                        principalTable: "Blooddonors",
                        principalColumn: "BloodDonorID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BloodDonorDonations_BloodDonorID",
                table: "BloodDonorDonations",
                column: "BloodDonorID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BloodDonorDonations");

            migrationBuilder.DropTable(
                name: "Blooddonors");
        }
    }
}
