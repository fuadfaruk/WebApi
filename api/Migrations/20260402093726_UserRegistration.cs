using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UserRegistration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "77c16e3f-317c-4f4e-a210-30bad9f5f5fa", "338d73ee-4d82-4bf6-b8e2-5ae7fa8151a5", "User", "USER" },
                    { "fc5a45db-74b0-4269-a94b-4b83b64cd888", "a9afd532-7853-4589-8be7-99ab0b3e32fc", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "77c16e3f-317c-4f4e-a210-30bad9f5f5fa");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fc5a45db-74b0-4269-a94b-4b83b64cd888");
        }
    }
}
